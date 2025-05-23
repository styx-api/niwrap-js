// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ASL_MFREE_METADATA: Metadata = {
    id: "e58261a229054027fd5fa9bba2e27ec983d0c0c7.boutiques",
    name: "asl_mfree",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface AslMfreeParameters {
    "__STYXTYPE__": "asl_mfree";
    "datafile": InputPathType;
    "mask": InputPathType;
    "out": string;
    "aif": InputPathType;
    "dt": number;
    "metric"?: InputPathType | null | undefined;
    "mthresh"?: number | null | undefined;
    "tcorrect": boolean;
    "bata"?: InputPathType | null | undefined;
    "batt"?: InputPathType | null | undefined;
    "bat": boolean;
    "bat_grad_thr"?: number | null | undefined;
    "t1"?: number | null | undefined;
    "fa"?: number | null | undefined;
    "std": boolean;
    "nwb"?: number | null | undefined;
    "turbo_quasar": boolean;
    "shift_factor"?: number | null | undefined;
    "verbose": boolean;
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
        "asl_mfree": asl_mfree_cargs,
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
        "asl_mfree": asl_mfree_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `asl_mfree(...)`.
 *
 * @interface
 */
interface AslMfreeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output results from ASL model-free analysis
     */
    result_file: OutputPathType;
    /**
     * Estimated tissue BAT image file
     */
    bat_img: OutputPathType;
}


function asl_mfree_params(
    datafile: InputPathType,
    mask: InputPathType,
    out: string,
    aif: InputPathType,
    dt: number,
    metric: InputPathType | null = null,
    mthresh: number | null = null,
    tcorrect: boolean = false,
    bata: InputPathType | null = null,
    batt: InputPathType | null = null,
    bat: boolean = false,
    bat_grad_thr: number | null = 0.2,
    t1: number | null = null,
    fa: number | null = null,
    std: boolean = false,
    nwb: number | null = null,
    turbo_quasar: boolean = false,
    shift_factor: number | null = 1,
    verbose: boolean = false,
): AslMfreeParameters {
    /**
     * Build parameters.
    
     * @param datafile ASL data file
     * @param mask Mask file
     * @param out Output directory name
     * @param aif Arterial input functions for deconvolution (4D volume, one aif for each voxel within mask)
     * @param dt Temporal spacing in data (s)
     * @param metric Metric image file (optional)
     * @param mthresh Metric threshold (optional)
     * @param tcorrect Apply correction for timing difference between AIF and tissue curve (optional)
     * @param bata Arterial BAT image (optional)
     * @param batt Tissue BAT image (optional)
     * @param bat Estimate tissue BAT from data and save this image (optional)
     * @param bat_grad_thr Edge detection gradient threshold (default: 0.2, optional)
     * @param t1 T1 (of blood) value (optional)
     * @param fa Flip angle (if using LL readout, optional)
     * @param std Calculate standard deviations on perfusion values using wild bootstrapping (optional)
     * @param nwb Number of permutations for wild bootstrapping (optional)
     * @param turbo_quasar Specify this is a Turbo QUASAR Sequence (optional)
     * @param shift_factor Slice shifting factor in Turbo QUASAR (default value: 1, optional)
     * @param verbose Enable verbose mode
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "asl_mfree" as const,
        "datafile": datafile,
        "mask": mask,
        "out": out,
        "aif": aif,
        "dt": dt,
        "tcorrect": tcorrect,
        "bat": bat,
        "std": std,
        "turbo_quasar": turbo_quasar,
        "verbose": verbose,
    };
    if (metric !== null) {
        params["metric"] = metric;
    }
    if (mthresh !== null) {
        params["mthresh"] = mthresh;
    }
    if (bata !== null) {
        params["bata"] = bata;
    }
    if (batt !== null) {
        params["batt"] = batt;
    }
    if (bat_grad_thr !== null) {
        params["bat_grad_thr"] = bat_grad_thr;
    }
    if (t1 !== null) {
        params["t1"] = t1;
    }
    if (fa !== null) {
        params["fa"] = fa;
    }
    if (nwb !== null) {
        params["nwb"] = nwb;
    }
    if (shift_factor !== null) {
        params["shift_factor"] = shift_factor;
    }
    return params;
}


function asl_mfree_cargs(
    params: AslMfreeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("asl_mfree");
    cargs.push(
        "--data",
        execution.inputFile((params["datafile"] ?? null))
    );
    cargs.push(
        "--mask",
        execution.inputFile((params["mask"] ?? null))
    );
    cargs.push(
        "--out",
        (params["out"] ?? null)
    );
    cargs.push(
        "--aif",
        execution.inputFile((params["aif"] ?? null))
    );
    cargs.push(
        "--dt",
        String((params["dt"] ?? null))
    );
    if ((params["metric"] ?? null) !== null) {
        cargs.push(
            "--metric",
            execution.inputFile((params["metric"] ?? null))
        );
    }
    if ((params["mthresh"] ?? null) !== null) {
        cargs.push(
            "--mthresh",
            String((params["mthresh"] ?? null))
        );
    }
    if ((params["tcorrect"] ?? null)) {
        cargs.push("--tcorrect");
    }
    if ((params["bata"] ?? null) !== null) {
        cargs.push(
            "--bata",
            execution.inputFile((params["bata"] ?? null))
        );
    }
    if ((params["batt"] ?? null) !== null) {
        cargs.push(
            "--batt",
            execution.inputFile((params["batt"] ?? null))
        );
    }
    if ((params["bat"] ?? null)) {
        cargs.push("--bat");
    }
    if ((params["bat_grad_thr"] ?? null) !== null) {
        cargs.push(
            "--bat_grad_thr",
            String((params["bat_grad_thr"] ?? null))
        );
    }
    if ((params["t1"] ?? null) !== null) {
        cargs.push(
            "--t1",
            String((params["t1"] ?? null))
        );
    }
    if ((params["fa"] ?? null) !== null) {
        cargs.push(
            "--fa",
            String((params["fa"] ?? null))
        );
    }
    if ((params["std"] ?? null)) {
        cargs.push("--std");
    }
    if ((params["nwb"] ?? null) !== null) {
        cargs.push(
            "--nwb",
            String((params["nwb"] ?? null))
        );
    }
    if ((params["turbo_quasar"] ?? null)) {
        cargs.push("--turbo_quasar");
    }
    if ((params["shift_factor"] ?? null) !== null) {
        cargs.push(
            "--shift_factor",
            String((params["shift_factor"] ?? null))
        );
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("--verbose");
    }
    return cargs;
}


function asl_mfree_outputs(
    params: AslMfreeParameters,
    execution: Execution,
): AslMfreeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AslMfreeOutputs = {
        root: execution.outputFile("."),
        result_file: execution.outputFile([(params["out"] ?? null), "/results.nii.gz"].join('')),
        bat_img: execution.outputFile([(params["out"] ?? null), "/bat.nii.gz"].join('')),
    };
    return ret;
}


function asl_mfree_execute(
    params: AslMfreeParameters,
    execution: Execution,
): AslMfreeOutputs {
    /**
     * ASL model-free analysis tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AslMfreeOutputs`).
     */
    params = execution.params(params)
    const cargs = asl_mfree_cargs(params, execution)
    const ret = asl_mfree_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function asl_mfree(
    datafile: InputPathType,
    mask: InputPathType,
    out: string,
    aif: InputPathType,
    dt: number,
    metric: InputPathType | null = null,
    mthresh: number | null = null,
    tcorrect: boolean = false,
    bata: InputPathType | null = null,
    batt: InputPathType | null = null,
    bat: boolean = false,
    bat_grad_thr: number | null = 0.2,
    t1: number | null = null,
    fa: number | null = null,
    std: boolean = false,
    nwb: number | null = null,
    turbo_quasar: boolean = false,
    shift_factor: number | null = 1,
    verbose: boolean = false,
    runner: Runner | null = null,
): AslMfreeOutputs {
    /**
     * ASL model-free analysis tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param datafile ASL data file
     * @param mask Mask file
     * @param out Output directory name
     * @param aif Arterial input functions for deconvolution (4D volume, one aif for each voxel within mask)
     * @param dt Temporal spacing in data (s)
     * @param metric Metric image file (optional)
     * @param mthresh Metric threshold (optional)
     * @param tcorrect Apply correction for timing difference between AIF and tissue curve (optional)
     * @param bata Arterial BAT image (optional)
     * @param batt Tissue BAT image (optional)
     * @param bat Estimate tissue BAT from data and save this image (optional)
     * @param bat_grad_thr Edge detection gradient threshold (default: 0.2, optional)
     * @param t1 T1 (of blood) value (optional)
     * @param fa Flip angle (if using LL readout, optional)
     * @param std Calculate standard deviations on perfusion values using wild bootstrapping (optional)
     * @param nwb Number of permutations for wild bootstrapping (optional)
     * @param turbo_quasar Specify this is a Turbo QUASAR Sequence (optional)
     * @param shift_factor Slice shifting factor in Turbo QUASAR (default value: 1, optional)
     * @param verbose Enable verbose mode
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AslMfreeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ASL_MFREE_METADATA);
    const params = asl_mfree_params(datafile, mask, out, aif, dt, metric, mthresh, tcorrect, bata, batt, bat, bat_grad_thr, t1, fa, std, nwb, turbo_quasar, shift_factor, verbose)
    return asl_mfree_execute(params, execution);
}


export {
      ASL_MFREE_METADATA,
      AslMfreeOutputs,
      AslMfreeParameters,
      asl_mfree,
      asl_mfree_params,
};
