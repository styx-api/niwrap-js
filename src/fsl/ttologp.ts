// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TTOLOGP_METADATA: Metadata = {
    id: "e7c9aefc20e0114f4a7b206bd95e25eb2265ec4b.boutiques",
    name: "ttologp",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface TtologpParameters {
    "__STYXTYPE__": "ttologp";
    "varsfile": InputPathType;
    "cbsfile": InputPathType;
    "dof": string;
    "outputvol"?: string | null | undefined;
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
        "ttologp": ttologp_cargs,
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
        "ttologp": ttologp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `ttologp(...)`.
 *
 * @interface
 */
interface TtologpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output volume for logp value
     */
    output_logpvol: OutputPathType | null;
}


function ttologp_params(
    varsfile: InputPathType,
    cbsfile: InputPathType,
    dof: string,
    outputvol: string | null = "logps",
    help_flag: boolean = false,
): TtologpParameters {
    /**
     * Build parameters.
    
     * @param varsfile Path to the vars file
     * @param cbsfile Path to the cbs file
     * @param dof Degree of freedom
     * @param outputvol Output volume for logp value (default is logps)
     * @param help_flag Display help information and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ttologp" as const,
        "varsfile": varsfile,
        "cbsfile": cbsfile,
        "dof": dof,
        "help_flag": help_flag,
    };
    if (outputvol !== null) {
        params["outputvol"] = outputvol;
    }
    return params;
}


function ttologp_cargs(
    params: TtologpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ttologp");
    cargs.push(execution.inputFile((params["varsfile"] ?? null)));
    cargs.push(execution.inputFile((params["cbsfile"] ?? null)));
    cargs.push((params["dof"] ?? null));
    if ((params["outputvol"] ?? null) !== null) {
        cargs.push(
            "-logpout",
            (params["outputvol"] ?? null)
        );
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-help");
    }
    return cargs;
}


function ttologp_outputs(
    params: TtologpParameters,
    execution: Execution,
): TtologpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TtologpOutputs = {
        root: execution.outputFile("."),
        output_logpvol: ((params["outputvol"] ?? null) !== null) ? execution.outputFile([(params["outputvol"] ?? null), ".nii.gz"].join('')) : null,
    };
    return ret;
}


function ttologp_execute(
    params: TtologpParameters,
    execution: Execution,
): TtologpOutputs {
    /**
     * Tool for computing logp.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TtologpOutputs`).
     */
    params = execution.params(params)
    const cargs = ttologp_cargs(params, execution)
    const ret = ttologp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function ttologp(
    varsfile: InputPathType,
    cbsfile: InputPathType,
    dof: string,
    outputvol: string | null = "logps",
    help_flag: boolean = false,
    runner: Runner | null = null,
): TtologpOutputs {
    /**
     * Tool for computing logp.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param varsfile Path to the vars file
     * @param cbsfile Path to the cbs file
     * @param dof Degree of freedom
     * @param outputvol Output volume for logp value (default is logps)
     * @param help_flag Display help information and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TtologpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TTOLOGP_METADATA);
    const params = ttologp_params(varsfile, cbsfile, dof, outputvol, help_flag)
    return ttologp_execute(params, execution);
}


export {
      TTOLOGP_METADATA,
      TtologpOutputs,
      TtologpParameters,
      ttologp,
      ttologp_params,
};
