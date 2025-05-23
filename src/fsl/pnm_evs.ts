// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const PNM_EVS_METADATA: Metadata = {
    id: "209e63d8df4e313b064ddd0e15f7ff0c258fd870.boutiques",
    name: "pnm_evs",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface PnmEvsParameters {
    "__STYXTYPE__": "pnm_evs";
    "input_file": InputPathType;
    "output_file": string;
    "tr_value": number;
    "cardiac_file"?: InputPathType | null | undefined;
    "respiratory_file"?: InputPathType | null | undefined;
    "order_cardiac"?: number | null | undefined;
    "order_respiratory"?: number | null | undefined;
    "order_mult_cardiac"?: number | null | undefined;
    "order_mult_respiratory"?: number | null | undefined;
    "csf_mask"?: InputPathType | null | undefined;
    "rvt_file"?: InputPathType | null | undefined;
    "heartrate_file"?: InputPathType | null | undefined;
    "rvt_smooth"?: number | null | undefined;
    "heartrate_smooth"?: number | null | undefined;
    "slice_direction"?: string | null | undefined;
    "slice_order"?: string | null | undefined;
    "slice_timing_file"?: InputPathType | null | undefined;
    "debug_flag": boolean;
    "verbose_flag": boolean;
    "help_flag": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "pnm_evs": pnm_evs_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "pnm_evs": pnm_evs_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `pnm_evs(...)`.
 *
 * @interface
 */
interface PnmEvsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output confound/EV matrix file
     */
    output_file: OutputPathType;
}


function pnm_evs_params(
    input_file: InputPathType,
    output_file: string,
    tr_value: number,
    cardiac_file: InputPathType | null = null,
    respiratory_file: InputPathType | null = null,
    order_cardiac: number | null = 2,
    order_respiratory: number | null = 1,
    order_mult_cardiac: number | null = 0,
    order_mult_respiratory: number | null = 0,
    csf_mask: InputPathType | null = null,
    rvt_file: InputPathType | null = null,
    heartrate_file: InputPathType | null = null,
    rvt_smooth: number | null = 0,
    heartrate_smooth: number | null = null,
    slice_direction: string | null = "z",
    slice_order: string | null = null,
    slice_timing_file: InputPathType | null = null,
    debug_flag: boolean = false,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
): PnmEvsParameters {
    /**
     * Build parameters.
    
     * @param input_file Input image filename (4D functional/EPI data)
     * @param output_file Output filename (for confound/EV matrix)
     * @param tr_value TR of fMRI volumes (in seconds)
     * @param cardiac_file Input filename for cardiac values (1 or 2 columns: time [phase])
     * @param respiratory_file Input filename for respiratory phase values (1 or 2 columns: time [phase])
     * @param order_cardiac Order of basic cardiac regressors (number of Fourier pairs)
     * @param order_respiratory Order of basic respiratory regressors (number of Fourier pairs)
     * @param order_mult_cardiac Order of multiplicative cardiac terms (also need to set --multr)
     * @param order_mult_respiratory Order of multiplicative respiratory terms (also need to set --multc)
     * @param csf_mask Filename of CSF mask image (and generate CSF regressor)
     * @param rvt_file Input filename of RVT data (2 columns: time value)
     * @param heartrate_file Input filename for heart rate data (2 columns: time value)
     * @param rvt_smooth Optional smoothing of RVT regressor (in seconds)
     * @param heartrate_smooth Optional smoothing of heart rate regressor (in seconds)
     * @param slice_direction Specify slice direction (x/y/z)
     * @param slice_order Specify slice ordering (up/down/interleaved_up/interleaved_down)
     * @param slice_timing_file Specify slice timing via an external file
     * @param debug_flag Turn on debugging output
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "pnm_evs" as const,
        "input_file": input_file,
        "output_file": output_file,
        "tr_value": tr_value,
        "debug_flag": debug_flag,
        "verbose_flag": verbose_flag,
        "help_flag": help_flag,
    };
    if (cardiac_file !== null) {
        params["cardiac_file"] = cardiac_file;
    }
    if (respiratory_file !== null) {
        params["respiratory_file"] = respiratory_file;
    }
    if (order_cardiac !== null) {
        params["order_cardiac"] = order_cardiac;
    }
    if (order_respiratory !== null) {
        params["order_respiratory"] = order_respiratory;
    }
    if (order_mult_cardiac !== null) {
        params["order_mult_cardiac"] = order_mult_cardiac;
    }
    if (order_mult_respiratory !== null) {
        params["order_mult_respiratory"] = order_mult_respiratory;
    }
    if (csf_mask !== null) {
        params["csf_mask"] = csf_mask;
    }
    if (rvt_file !== null) {
        params["rvt_file"] = rvt_file;
    }
    if (heartrate_file !== null) {
        params["heartrate_file"] = heartrate_file;
    }
    if (rvt_smooth !== null) {
        params["rvt_smooth"] = rvt_smooth;
    }
    if (heartrate_smooth !== null) {
        params["heartrate_smooth"] = heartrate_smooth;
    }
    if (slice_direction !== null) {
        params["slice_direction"] = slice_direction;
    }
    if (slice_order !== null) {
        params["slice_order"] = slice_order;
    }
    if (slice_timing_file !== null) {
        params["slice_timing_file"] = slice_timing_file;
    }
    return params;
}


function pnm_evs_cargs(
    params: PnmEvsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("pnm_evs");
    cargs.push(
        "--in",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "--out",
        (params["output_file"] ?? null)
    );
    cargs.push(
        "--tr",
        String((params["tr_value"] ?? null))
    );
    if ((params["cardiac_file"] ?? null) !== null) {
        cargs.push(
            "--cardiac",
            execution.inputFile((params["cardiac_file"] ?? null))
        );
    }
    if ((params["respiratory_file"] ?? null) !== null) {
        cargs.push(
            "--respiratory",
            execution.inputFile((params["respiratory_file"] ?? null))
        );
    }
    if ((params["order_cardiac"] ?? null) !== null) {
        cargs.push(
            "--oc",
            String((params["order_cardiac"] ?? null))
        );
    }
    if ((params["order_respiratory"] ?? null) !== null) {
        cargs.push(
            "--or",
            String((params["order_respiratory"] ?? null))
        );
    }
    if ((params["order_mult_cardiac"] ?? null) !== null) {
        cargs.push(
            "--multc",
            String((params["order_mult_cardiac"] ?? null))
        );
    }
    if ((params["order_mult_respiratory"] ?? null) !== null) {
        cargs.push(
            "--multr",
            String((params["order_mult_respiratory"] ?? null))
        );
    }
    if ((params["csf_mask"] ?? null) !== null) {
        cargs.push(
            "--csfmask",
            execution.inputFile((params["csf_mask"] ?? null))
        );
    }
    if ((params["rvt_file"] ?? null) !== null) {
        cargs.push(
            "--rvt",
            execution.inputFile((params["rvt_file"] ?? null))
        );
    }
    if ((params["heartrate_file"] ?? null) !== null) {
        cargs.push(
            "--heartrate",
            execution.inputFile((params["heartrate_file"] ?? null))
        );
    }
    if ((params["rvt_smooth"] ?? null) !== null) {
        cargs.push(
            "--rvtsmooth",
            String((params["rvt_smooth"] ?? null))
        );
    }
    if ((params["heartrate_smooth"] ?? null) !== null) {
        cargs.push(
            "--heartratesmooth",
            String((params["heartrate_smooth"] ?? null))
        );
    }
    if ((params["slice_direction"] ?? null) !== null) {
        cargs.push(
            "--slicedir",
            (params["slice_direction"] ?? null)
        );
    }
    if ((params["slice_order"] ?? null) !== null) {
        cargs.push(
            "--sliceorder",
            (params["slice_order"] ?? null)
        );
    }
    if ((params["slice_timing_file"] ?? null) !== null) {
        cargs.push(
            "--slicetiming",
            execution.inputFile((params["slice_timing_file"] ?? null))
        );
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("--verbose");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function pnm_evs_outputs(
    params: PnmEvsParameters,
    execution: Execution,
): PnmEvsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: PnmEvsOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function pnm_evs_execute(
    params: PnmEvsParameters,
    execution: Execution,
): PnmEvsOutputs {
    /**
     * PNM EVs: Generates physiological noise regressors for fMRI data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `PnmEvsOutputs`).
     */
    params = execution.params(params)
    const cargs = pnm_evs_cargs(params, execution)
    const ret = pnm_evs_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function pnm_evs(
    input_file: InputPathType,
    output_file: string,
    tr_value: number,
    cardiac_file: InputPathType | null = null,
    respiratory_file: InputPathType | null = null,
    order_cardiac: number | null = 2,
    order_respiratory: number | null = 1,
    order_mult_cardiac: number | null = 0,
    order_mult_respiratory: number | null = 0,
    csf_mask: InputPathType | null = null,
    rvt_file: InputPathType | null = null,
    heartrate_file: InputPathType | null = null,
    rvt_smooth: number | null = 0,
    heartrate_smooth: number | null = null,
    slice_direction: string | null = "z",
    slice_order: string | null = null,
    slice_timing_file: InputPathType | null = null,
    debug_flag: boolean = false,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
    runner: Runner | null = null,
): PnmEvsOutputs {
    /**
     * PNM EVs: Generates physiological noise regressors for fMRI data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Input image filename (4D functional/EPI data)
     * @param output_file Output filename (for confound/EV matrix)
     * @param tr_value TR of fMRI volumes (in seconds)
     * @param cardiac_file Input filename for cardiac values (1 or 2 columns: time [phase])
     * @param respiratory_file Input filename for respiratory phase values (1 or 2 columns: time [phase])
     * @param order_cardiac Order of basic cardiac regressors (number of Fourier pairs)
     * @param order_respiratory Order of basic respiratory regressors (number of Fourier pairs)
     * @param order_mult_cardiac Order of multiplicative cardiac terms (also need to set --multr)
     * @param order_mult_respiratory Order of multiplicative respiratory terms (also need to set --multc)
     * @param csf_mask Filename of CSF mask image (and generate CSF regressor)
     * @param rvt_file Input filename of RVT data (2 columns: time value)
     * @param heartrate_file Input filename for heart rate data (2 columns: time value)
     * @param rvt_smooth Optional smoothing of RVT regressor (in seconds)
     * @param heartrate_smooth Optional smoothing of heart rate regressor (in seconds)
     * @param slice_direction Specify slice direction (x/y/z)
     * @param slice_order Specify slice ordering (up/down/interleaved_up/interleaved_down)
     * @param slice_timing_file Specify slice timing via an external file
     * @param debug_flag Turn on debugging output
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `PnmEvsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(PNM_EVS_METADATA);
    const params = pnm_evs_params(input_file, output_file, tr_value, cardiac_file, respiratory_file, order_cardiac, order_respiratory, order_mult_cardiac, order_mult_respiratory, csf_mask, rvt_file, heartrate_file, rvt_smooth, heartrate_smooth, slice_direction, slice_order, slice_timing_file, debug_flag, verbose_flag, help_flag)
    return pnm_evs_execute(params, execution);
}


export {
      PNM_EVS_METADATA,
      PnmEvsOutputs,
      PnmEvsParameters,
      pnm_evs,
      pnm_evs_params,
};
