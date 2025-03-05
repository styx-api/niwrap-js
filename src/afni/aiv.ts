// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const AIV_METADATA: Metadata = {
    id: "75e86933c73fb7bb162a4ffaf0ccf5435ce96089.boutiques",
    name: "aiv",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface AivParameters {
    "__STYXTYPE__": "aiv";
    "verbose": boolean;
    "quiet": boolean;
    "title"?: string | null | undefined;
    "port"?: number | null | undefined;
    "pad"?: string | null | undefined;
    "input_images": Array<InputPathType>;
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
        "aiv": aiv_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `aiv(...)`.
 *
 * @interface
 */
interface AivOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function aiv_params(
    input_images: Array<InputPathType>,
    verbose: boolean = false,
    quiet: boolean = false,
    title: string | null = null,
    port: number | null = null,
    pad: string | null = null,
): AivParameters {
    /**
     * Build parameters.
    
     * @param input_images Input image files (e.g., img1.jpg, img2.bmp).
     * @param verbose Print out the image filenames for progress tracking.
     * @param quiet Run the program in quiet mode.
     * @param title Specify the window title.
     * @param port Listen to TCP/IP port for incoming images.
     * @param pad Pad all input images to be the same size.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "aiv" as const,
        "verbose": verbose,
        "quiet": quiet,
        "input_images": input_images,
    };
    if (title !== null) {
        params["title"] = title;
    }
    if (port !== null) {
        params["port"] = port;
    }
    if (pad !== null) {
        params["pad"] = pad;
    }
    return params;
}


function aiv_cargs(
    params: AivParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("aiv");
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-q");
    }
    if ((params["title"] ?? null) !== null) {
        cargs.push(
            "-title",
            (params["title"] ?? null)
        );
    }
    if ((params["port"] ?? null) !== null) {
        cargs.push(
            "-p",
            String((params["port"] ?? null))
        );
    }
    if ((params["pad"] ?? null) !== null) {
        cargs.push(
            "-pad",
            (params["pad"] ?? null)
        );
    }
    cargs.push(...(params["input_images"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function aiv_outputs(
    params: AivParameters,
    execution: Execution,
): AivOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AivOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function aiv_execute(
    params: AivParameters,
    execution: Execution,
): AivOutputs {
    /**
     * AFNI Image Viewer program. Shows the 2D images on the command line in an AFNI-like image viewer.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AivOutputs`).
     */
    params = execution.params(params)
    const cargs = aiv_cargs(params, execution)
    const ret = aiv_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function aiv(
    input_images: Array<InputPathType>,
    verbose: boolean = false,
    quiet: boolean = false,
    title: string | null = null,
    port: number | null = null,
    pad: string | null = null,
    runner: Runner | null = null,
): AivOutputs {
    /**
     * AFNI Image Viewer program. Shows the 2D images on the command line in an AFNI-like image viewer.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_images Input image files (e.g., img1.jpg, img2.bmp).
     * @param verbose Print out the image filenames for progress tracking.
     * @param quiet Run the program in quiet mode.
     * @param title Specify the window title.
     * @param port Listen to TCP/IP port for incoming images.
     * @param pad Pad all input images to be the same size.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AivOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(AIV_METADATA);
    const params = aiv_params(input_images, verbose, quiet, title, port, pad)
    return aiv_execute(params, execution);
}


export {
      AIV_METADATA,
      AivOutputs,
      AivParameters,
      aiv,
      aiv_params,
};
