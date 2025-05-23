// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LABEL2SURF_METADATA: Metadata = {
    id: "e79995ea6cf3a63ca3f02be2fa4a0665ff77a9de.boutiques",
    name: "label2surf",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface Label2surfParameters {
    "__STYXTYPE__": "label2surf";
    "input_surface": InputPathType;
    "output_surface": string;
    "labels": InputPathType;
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
        "label2surf": label2surf_cargs,
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
        "label2surf": label2surf_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `label2surf(...)`.
 *
 * @interface
 */
interface Label2surfOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Resulting output surface file
     */
    out_surf: OutputPathType;
}


function label2surf_params(
    input_surface: InputPathType,
    output_surface: string,
    labels: InputPathType,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
): Label2surfParameters {
    /**
     * Build parameters.
    
     * @param input_surface Input surface file
     * @param output_surface Output surface file
     * @param labels ASCII list of label files
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label2surf" as const,
        "input_surface": input_surface,
        "output_surface": output_surface,
        "labels": labels,
        "verbose_flag": verbose_flag,
        "help_flag": help_flag,
    };
    return params;
}


function label2surf_cargs(
    params: Label2surfParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("label2surf");
    cargs.push(
        "--surf",
        execution.inputFile((params["input_surface"] ?? null))
    );
    cargs.push(
        "--out",
        (params["output_surface"] ?? null)
    );
    cargs.push(
        "--labels",
        execution.inputFile((params["labels"] ?? null))
    );
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("--verbose");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function label2surf_outputs(
    params: Label2surfParameters,
    execution: Execution,
): Label2surfOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Label2surfOutputs = {
        root: execution.outputFile("."),
        out_surf: execution.outputFile([(params["output_surface"] ?? null)].join('')),
    };
    return ret;
}


function label2surf_execute(
    params: Label2surfParameters,
    execution: Execution,
): Label2surfOutputs {
    /**
     * Transform a group of labels into a surface.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Label2surfOutputs`).
     */
    params = execution.params(params)
    const cargs = label2surf_cargs(params, execution)
    const ret = label2surf_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function label2surf(
    input_surface: InputPathType,
    output_surface: string,
    labels: InputPathType,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
    runner: Runner | null = null,
): Label2surfOutputs {
    /**
     * Transform a group of labels into a surface.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_surface Input surface file
     * @param output_surface Output surface file
     * @param labels ASCII list of label files
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Label2surfOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LABEL2SURF_METADATA);
    const params = label2surf_params(input_surface, output_surface, labels, verbose_flag, help_flag)
    return label2surf_execute(params, execution);
}


export {
      LABEL2SURF_METADATA,
      Label2surfOutputs,
      Label2surfParameters,
      label2surf,
      label2surf_params,
};
