// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_ENTS_METADATA: Metadata = {
    id: "f66a5a56bce20baecbbcffc7deaf985412131450.boutiques",
    name: "fsl_ents",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslEntsParameters {
    "__STYXTYPE__": "fsl_ents";
    "icadir": string;
    "components": Array<string>;
    "outfile"?: InputPathType | null | undefined;
    "overwrite": boolean;
    "conffile"?: Array<InputPathType> | null | undefined;
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
        "fsl_ents": fsl_ents_cargs,
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
        "fsl_ents": fsl_ents_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_ents(...)`.
 *
 * @interface
 */
interface FslEntsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File to save time series to
     */
    out_time_series: OutputPathType | null;
}


function fsl_ents_params(
    icadir: string,
    components: Array<string>,
    outfile: InputPathType | null = null,
    overwrite: boolean = false,
    conffile: Array<InputPathType> | null = null,
): FslEntsParameters {
    /**
     * Build parameters.
    
     * @param icadir .ica directory to extract time series from
     * @param components Component number or FIX/AROMA file specifying components to extract
     * @param outfile File to save time series to
     * @param overwrite Overwrite output file if it exists
     * @param conffile Extra files to append to output file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_ents" as const,
        "icadir": icadir,
        "components": components,
        "overwrite": overwrite,
    };
    if (outfile !== null) {
        params["outfile"] = outfile;
    }
    if (conffile !== null) {
        params["conffile"] = conffile;
    }
    return params;
}


function fsl_ents_cargs(
    params: FslEntsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_ents");
    cargs.push((params["icadir"] ?? null));
    cargs.push(...(params["components"] ?? null));
    if ((params["outfile"] ?? null) !== null) {
        cargs.push(
            "-o",
            execution.inputFile((params["outfile"] ?? null))
        );
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-ow");
    }
    if ((params["conffile"] ?? null) !== null) {
        cargs.push(
            "-c",
            ...(params["conffile"] ?? null).map(f => execution.inputFile(f))
        );
    }
    cargs.push("[-h]");
    return cargs;
}


function fsl_ents_outputs(
    params: FslEntsParameters,
    execution: Execution,
): FslEntsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslEntsOutputs = {
        root: execution.outputFile("."),
        out_time_series: ((params["outfile"] ?? null) !== null) ? execution.outputFile([path.basename((params["outfile"] ?? null))].join('')) : null,
    };
    return ret;
}


function fsl_ents_execute(
    params: FslEntsParameters,
    execution: Execution,
): FslEntsOutputs {
    /**
     * Extract component time series from a MELODIC .ica directory.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslEntsOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_ents_cargs(params, execution)
    const ret = fsl_ents_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_ents(
    icadir: string,
    components: Array<string>,
    outfile: InputPathType | null = null,
    overwrite: boolean = false,
    conffile: Array<InputPathType> | null = null,
    runner: Runner | null = null,
): FslEntsOutputs {
    /**
     * Extract component time series from a MELODIC .ica directory.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param icadir .ica directory to extract time series from
     * @param components Component number or FIX/AROMA file specifying components to extract
     * @param outfile File to save time series to
     * @param overwrite Overwrite output file if it exists
     * @param conffile Extra files to append to output file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslEntsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_ENTS_METADATA);
    const params = fsl_ents_params(icadir, components, outfile, overwrite, conffile)
    return fsl_ents_execute(params, execution);
}


export {
      FSL_ENTS_METADATA,
      FslEntsOutputs,
      FslEntsParameters,
      fsl_ents,
      fsl_ents_params,
};
